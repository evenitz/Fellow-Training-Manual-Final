class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def welcome_email(user)
    @user = user
    @url = "http://localhost:3000/login"
    mail(:to => user.email, :subject => "Welcome to the Capital Good Fund training manual")
  end
end
