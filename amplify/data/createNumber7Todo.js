import { util } from '@aws-appsync/utils';

export function request(ctx) {
    const { content } = ctx.args;
    const now = util.time.nowISO8601();
    return {
        operation: 'PutItem',
        key: util.dynamodb.toMapValues({
            id: util.autoId()
        }),
        attributeValues: util.dynamodb.toMapValues({
            content,
            createdAt: now,
            updatedAt: now
        })
    };
}

export function response(ctx) {
  return ctx.result
}