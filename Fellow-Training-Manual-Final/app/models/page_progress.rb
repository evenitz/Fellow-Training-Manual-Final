class PageProgress < ActiveRecord::Base
  belongs_to :topic_progress

  attr_accessor :complete, :accessible
  attr_accessible :complete, :page_number, :accessible


  def complete_page(page)
    pageProgress = current_user.progress.pages.find_by_page_number(page.id)
    if !pageProgress.complete
      pageProgress.complete = true
      secondPage = next_page(page)
      nextPageProgress = current_user.progress.find_by_page_number(secondPage.id)
      if nextPgeProgress
        nextPageProgress.accessible = true
        nextPageProgress.save
      else
        Topic.open_next_topic
    end
  end

  def next_page(page)
    topic = Topic.find(page.section_id)
    pages = topic.pages
    numOfPages = pages.count
    if page.order < numOfPages
      return pages.find(page.order + 1)
    else
      return nil
    end
  end

  def last_page(page)
    return Topic.find(Page.find(page_number).topic_id).pages.all.length == page.page_number
  end

end
