class TopicsController < ApplicationController
  before_filter :authenticate

  def show
    @topic = Topic.find(params[:id])
    @pages = @topic.pages.order("pageOrder")
  end

  def index
  end

  def new
    @topic = Topic.new
  end

  def create
    @topic = Topic.create(params[:topic])
    @topic.topicOrder = nextOrder(@topic)
    if @topic.save
      redirect_to @topic
    else
      render 'new'
    end
  end

  def edit
    @topic = Topic.find(params[:id])
  end

  def update
    @topic = Topic.find(params[:id])
    if @topic.update_attributes(params[:topic])
      redirect_to @topic
    else
      render 'edit'
    end
  end

  def destroy
    @topic = Topic.find(params[:id])
    @section = @topic.section
    @topic.destroy
    redirect_to section_path(@section)
  end

  def complete
    @topic = Topic.find(params[:id])
    @nextTopic = nextTopic(@topic)
  end

  private

    def authenticate
      deny_access unless signed_in?
    end

    def nextTopic(topic)
      topicOrder = topic.order
      if topic.section.topics.all.count > topicOrder
        return topic.section.topics.find_by_order(topicOrder + 1)
      else
        return topic
      end
    end

    def previousTopic(topic)
      topicOrder = topic.order
      if topicOrder != 0
        return topic.section.topics.find_by_order(topicOrder - 1)
      else
        return topic
      end
    end

    def nextOrder(topic)
      if topic.section.topics != []
        return topic.section.topics.order("topicOrder").last.topicOrder + 1
      else
        return 1
      end
    end

end
