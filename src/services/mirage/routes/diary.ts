import { Response, Request } from 'miragejs';
import { handleErrors } from '../server';
import { Entry } from '../../../interfaces/entry.interface';
import { Diary } from '../../../interfaces/diary.interface';
import { User } from '../../../interfaces/user.interface';
import dayjs from 'dayjs';


export const create = (schema: any, req: Request): { user: User, diary: Diary } | Response => {
    try {

        const { title, type, userId } = JSON.parse(req.requestBody) as Partial<Diary>;

        const exUser = schema.users.findBy({ id: userId });

        if (!exUser) {
            return handleErrors(null, "No such user exists");
        }

        const now = dayjs().format();

        const diary = exUser.createDiary({
            title,
            type,
            createdAt: now,
            updatedAt: now,
        });

        return {
            user: {
                ...exUser.attrs,
            },
            diary: diary.attrs,
        };

    } catch (error) {
        return handleErrors(error, 'Failed to create diary');
    }
}

