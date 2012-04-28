class LibraryController < ApplicationController
  before_filter :authenticate

  def show
    @sections = Section.order("sectionOrder")
  end

  private

    def authenticate
      deny_access unless signed_in?
    end

end
