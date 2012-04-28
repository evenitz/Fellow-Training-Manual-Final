#
# track pages that a user has completed
#
# Sections -> topics -> pages
#
# Sections allowed access to
# topics allowed access to
# pages completed?
# if pages page order i - 1 for i is complete then open
#

class UserProgress < ActiveRecord::Base
  belongs_to :user

  has_many :section_progresses
  has_many :topic_progresses, :through => :section_progresses
  has_many :page_progresses, :through => :topic_progresses

end
