import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


// import Database from '@ioc:Adonis/Lucid/Database'

import Post from 'App/Models/Post'

import { StoreValidator, UpdateValidator } from 'App/Validators/Post'

export default class PostsController {
  public async index({}: HttpContextContract) {
    // const posts = await Post.all()
    // const posts = await Post.query().orderBy('id', 'desc').preload('author')
     const posts = await Post.query().paginate(1, 10)
    return posts
  }

  public async store({ request, auth }: HttpContextContract) {
    // const data = request.only(['title', 'content'])
    const data = await request.validate(StoreValidator)

    const user = await auth.authenticate()
    
    const post = await Post.create({ authorId: user.id, ...data })

    await post.preload('author')

    return post
  }
  public async show({ params }: HttpContextContract) {
    // const post = Database.rawQuery(`select * from posts whete id id = ${params.id}`)
    const post = await Post.findOrFail(params.id)
    return post
  }
  public async update({ request, params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    // const data = request.only(['title', 'content'])
    const data = await request.validate(UpdateValidator)
    post.merge(data)
    await post.preload('author')
    await post.save()
    return post
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    await post.delete()
  }
}
