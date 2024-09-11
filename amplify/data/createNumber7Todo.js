import { util } from '@aws-appsync/utils';

export function request(ctx) {
    const { content } = ctx.args;
    
    // 7桁の10進数を表す文字列かどうかをチェック
    if (content.length !== 7 || !util.matches('^[0-9]{7}$', content)) {
        return util.error('Invalid input: content must be a 7-digit number');
    }

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