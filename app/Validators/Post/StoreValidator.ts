import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    
    title: schema.string({ trim: true }, [rules.unique({ table: 'posts', column: 'title' }) ]),
    content: schema.string({ trim: true }),
    
  })


  public messages = {
    'title.unique': 'O {{ field }} Título precisa ser único.',
    'required': 'Este campo é obrigatório.'
  }
}
