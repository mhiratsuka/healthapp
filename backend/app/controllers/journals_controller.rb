class JournalsController < ApplicationController
  # GET  /pets/:pet_id/journals
  def index
    journals = load_journals(params[:pet_id])
    render json: { status: 'SUCCESS', message: 'Loaded journals', data: journals }
  end

  # GET /pets/:pet_id/journals
  def show
    journal = load_journal(params[:id])
    render json: { status: 'SUCCESS', message: 'Loaded journal', data: journal }
  end

  # Create /pets/:pet_id/journals
  def create
    journal = Journal.new(journal_params)
    journal.pet_id = params[:pet_id]

    if journal.save
      render json: {
        status: 'New journal created',
        message: 'Created the journal',
        data: journal
      }
    else
      render json: {
        status: 'journal is not creted',
        message: 'Not created the journal',
        data: journal.errors
      }
    end
  end

  # PATCH/PUT /journals/:id
  def update
    journal = load_journal(params[:id])
    journal.sex_id = params[:sex_id] if params[:sex_id]

    if journal.update(journal_params)
      render json: {
        status: 'SUCCESS',
        message: 'Updated the journal',
        data: journal
      }
    else
      render json: {
        status: 'ERROR',
        message: 'Not updated the journal',
        data: journal.errors
      }
    end
  end

  # DELETE /journals/:id
  def destroy
    journal = load_journal(params[:id])
    journal.destroy
    render json: { status: 'SUCCESS', message: 'Deleted the journal', data: journal }
  end

  private
    def load_journals(pet_id)
      Journal.where(pet_id: pet_id)
    end

    def load_journal(id)
      Journal.find(id)
    end

    def journal_params
      params.require(:journal).permit(:title, :from_date, :to_date, :note, :category)
    end
end
