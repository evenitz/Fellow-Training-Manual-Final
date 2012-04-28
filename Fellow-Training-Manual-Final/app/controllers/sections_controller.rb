class SectionsController < ApplicationController
  before_filter :authenticate

  def show
    @section = Section.find(params[:id])
    @topics = @section.topics.order("topicOrder")
  end

  def index
    @topics = Topic.all
  end

  private

    def authenticate
      deny_access unless signed_in?
    end

end
