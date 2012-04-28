class PagesController < ApplicationController
  before_filter :authenticate

  def show
    @page = Page.find(params[:id])
    @nextPage = nextPage(@page)
    @previousPage = previousPage(@page)
  end

  def new
    @page = Page.new
  end

  def create
    @page = Page.create(params[:page])
    #@page.pageOrder = nextOrder(@page)
    if @page.save
      redirect_to @page.topic#, :flash => { :success => "Page " + @page.name + " created" }
    else
      render 'new'
    end
  end

  def edit
    @page = Page.find(params[:id])
  end

  def update
    @page = Page.find(params[:id])
    if @page.update_attributes(params[:page])
      redirect_to @page.topic, :flash => { :success => "Page " + @page.name + " update" }
    else
      render 'edit'
    end
  end

  def complete
    @page = Page.find(params[:id])
  end

  def index
  end

  def destroy
    @page = Page.find(params[:id])
    @topic = @page.topic
    @page.destroy
    redirect_to topic_path(@topic), :flash => { :success => "Page " + @page.name + " deleted" }
  end

  private

    def authenticate
      deny_access unless signed_in?
    end

  def nextPage(page)
    pageOrder = page.pageOrder
    if page.topic.pages.all.count > pageOrder
      return page.topic.pages.find_by_pageOrder(pageOrder + 1)
    else
      return page
    end
  end

  def previousPage(page)
    pageOrder = page.pageOrder
    if pageOrder != 0 
      return page.topic.pages.find_by_pageOrder(pageOrder - 1)
    else
      return page
    end
  end

  def nextOrder(page)
    if page.topic.pages != []
      return page.topic.pages.order("pageOrder").last.pageOrder + 1 
    else
      return 1
    end
  end
end
