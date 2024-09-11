export function request(ctx) {
    console.log(ctx.args.content); 
    console.log("hello");
    return {}
}

export function response(ctx) {
  return ctx.result
}