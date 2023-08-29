import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUserSeeder extends BaseSeeder {
  public static developmentOnly = false

  public async run() {
    await User.create({
      name: 'Alberto Gomes da Silva',
      email: 'albertogomesdasilva@gmail.com',
      password: '123456',
      role: 'admin',
    })
    await User.createMany([
      {
        name: 'Administrador',
        email: 'admin@admin.com',
        password: 'admin',
        role: 'admin',
      },
      {
        name: 'Wendell Pires da Silva',
        email: 'dell@gmail.com',
        password: '123456',
        role: 'normal',
      },
    ])
  }
}
