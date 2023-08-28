import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'AuthController.create')
  Route.delete('/', 'AuthController.destroy')

}).prefix('/auth')
