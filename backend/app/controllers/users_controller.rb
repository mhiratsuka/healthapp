
class UsersController < ApplicationController
  # GET /users
  def index
    users = User.all
    render json: { status: 'SUCCESS', message: 'Loaded users', data: users }
  end

  # GET /users/1
  def show
    user = load_user(params[:id])
    render json: { status: 'SUCCESS', message: 'Loaded user', data: user }
  end

  # User /users
  def create
    user = User.new(user_params)

    if user.save
      render json: {
        status: 'New user created',
        message: 'Created the user',
        data: user
      }
    else
      render json: {
        status: 'user is not creted',
        message: 'Not created the user',
        data: user.errors}
    end
  end

  # PATCH/PUT /users/1
  def update
    user = load_user(params[:id])
    if user.update(user_params)
      render json: {
        status: 'SUCCESS',
        message: 'Updated the user',
        data: user
      }
    else
      render json: {
        status: 'ERROR',
        message: 'Not updated the user',
        data: user.errors
      }
    end
  end

  # DELETE /users/1
  def destroy
    user = load_user(params[:id])
    user.destroy
    render json: { status: 'SUCCESS', message: 'Deleted the user', data: user }
  end

  private
    def load_user(id)
      User.find(id)
    end

    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
end
