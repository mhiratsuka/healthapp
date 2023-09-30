class PetsController < ApplicationController
  # GET /users/:user_id/pets
  # FIXME: Get data which is used for frontend
  def index
    pets = load_pets(params[:user_id])
    render json: { status: 'SUCCESS', message: 'Loaded pets', data: pets }
  end

  # GET /pets/:id
  def show
    pet = load_pet(params[:id])
    render json: { status: 'SUCCESS', message: 'Loaded pet', data: pet }
  end

  # Create /users/:user_id/pets
  def create
    pet = Pet.new(pet_params)
    pet.user_id = params[:user_id]
    pet.sex_id = params[:sex_id]

    if pet.save
      render json: {
        status: 'New pet created',
        message: 'Created the pet',
        data: pet
      }
    else
      render json: {
        status: 'pet is not creted',
        message: 'Not created the pet',
        data: pet.errors
      }
    end
  end

  # PATCH/PUT /pets/:id
  def update
    pet = load_pet(params[:id])
    pet.sex_id = params[:sex_id] if params[:sex_id]

    if pet.update(pet_params)
      render json: {
        status: 'SUCCESS',
        message: 'Updated the pet',
        data: pet
      }
    else
      render json: {
        status: 'ERROR',
        message: 'Not updated the pet',
        data: pet.errors
      }
    end
  end

  # DELETE /pets/:id
  def destroy
    pet = load_pet(params[:id])
    pet.destroy
    render json: { status: 'SUCCESS', message: 'Deleted the pet', data: pet }
  end

  private
    def load_pets(user_id)
      Pet.where(user_id: user_id)
    end

    def load_pet(id)
      Pet.find(id)
    end

    def pet_params
      params.require(:pet).permit(:name, :kind, :birthday)
    end
end
