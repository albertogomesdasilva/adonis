import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
  public async handle({ auth, response }: HttpContextContract,
    next: () => any,
    allowedRoles: any )  {
    // console.log(allowedRoles)
    
      const user = await auth.authenticate()

      if(allowedRoles.includes(user.role)) {
        return response.unauthorized({ error: { message: 'access denied' }})
      }

    await next()
  }
}
