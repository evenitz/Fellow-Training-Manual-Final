class TopicProgress < ActiveRecord::Base
  belongs_to :section_progress
  has_many: :page_progresses

  def open_next_topic
    if !!next_topic
      nextTopic = next_topic
      nextTopic.accessible = true
      nextTopic.save
    else
      Section.open_next_Section
    end
  end

  def remaining_topics
    return current_user.user_progress.topics.find)by_accessible(false)
  end

  def next_topic
    return remaining_topics.first
  end
end
