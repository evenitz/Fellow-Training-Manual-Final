class SectionProgress < ActiveRecord::Base
  belongs_to :user_progress
  has_many: :topic_progresses

  def open_next_section
    if !!next_section
      nextSection = next_section
      nextSection.accessible = true
      nextSection.save
    end
  end

  def remaining_sections
    return = current_user.user_progress.sections.find_by_accessible(false)
  end

  def next_section
    return remaining_sections.first
  end

end
