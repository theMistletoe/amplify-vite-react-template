export function request(ctx) {
    return {
        operation: 'Create',
        key: undefined,
        attributeValues: {
            content: ctx.args.content
        }
    };
}

export function response(ctx) {
  return ctx.result
}