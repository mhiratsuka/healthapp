
class UsersController < ApplicationController
  # GET /users
  def index
    users = Users.all
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
      render json: { status: :'New user created', data: user }
    else
      render json: {status: 'user is not creted', dataa: user.errors}
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    def load_user(id)
      User.find(id)
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
end
