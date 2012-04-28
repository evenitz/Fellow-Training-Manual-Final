# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Emanuel', :city => cities.first)

Section.create(:name => "Pre-Training", :description => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rutrum nunc, in tempus arcu commodo id. Aenean a felis lacus, sit amet malesuada nibh. Vestibulum egestas purus nec enim lacinia convallis. Ut at sapien semper eros malesuada molestie sit amet nec nibh. Mauris sagittis, libero eu feugiat iaculis, quam leo vehicula tellus, eu condimentum sapien odio sit amet ligula. Praesent ante dui, convallis eget suscipit id, feugiat eu felis. Maecenas rutrum nulla vel magna egestas id aliquam nisl volutpat. Nam tristique, eros a laoreet elementum, ipsum risus ultrices urna, commodo consectetur justo magna sed nisl.", :sectionOrder => 1)

Section.create(:name => "Training", :description => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rutrum nunc, in tempus arcu commodo id. Aenean a felis lacus, sit amet malesuada nibh. Vestibulum egestas purus nec enim lacinia convallis. Ut at sapien semper eros malesuada molestie sit amet nec nibh. Mauris sagittis, libero eu feugiat iaculis, quam leo vehicula tellus, eu condimentum sapien odio sit amet ligula. Praesent ante dui, convallis eget suscipit id, feugiat eu felis. Maecenas rutrum nulla vel magna egestas id aliquam nisl volutpat. Nam tristique, eros a laoreet elementum, ipsum risus ultrices urna, commodo consectetur justo magna sed nisl.", :sectionOrder => 2)

Section.create(:name => "Post-Training", :description => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rutrum nunc, in tempus arcu commodo id. Aenean a felis lacus, sit amet malesuada nibh. Vestibulum egestas purus nec enim lacinia convallis. Ut at sapien semper eros malesuada molestie sit amet nec nibh. Mauris sagittis, libero eu feugiat iaculis, quam leo vehicula tellus, eu condimentum sapien odio sit amet ligula. Praesent ante dui, convallis eget suscipit id, feugiat eu felis. Maecenas rutrum nulla vel magna egestas id aliquam nisl volutpat. Nam tristique, eros a laoreet elementum, ipsum risus ultrices urna, commodo consectetur justo magna sed nisl.", :sectionOrder => 3)


admin = User.create(:name => "admin", :email => "admin@example.com", :password => "foobar", :password_confirmation => "foobar")
admin.toggle!(:admin)
admin.save

Topic.create(:name => "Economic Structures", :description => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rutrum nunc, in tempus arcu commodo id. Aenean a felis lacus, sit amet malesuada nibh. Vestibulum egestas purus nec enim lacinia convallis. Ut at sapien semper eros malesuada molestie sit amet nec nibh. Mauris sagittis, libero eu feugiat iaculis, quam leo vehicula tellus, eu condimentum sapien odio sit amet ligula.", :section_id => 1, :topicOrder => 1)

Topic.create(:name => "Poverty", :description => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rutrum nunc, in tempus arcu commodo id. Aenean a felis lacus, sit amet malesuada nibh. Vestibulum egestas purus nec enim lacinia convallis. Ut at sapien semper eros malesuada molestie sit amet nec nibh. Mauris sagittis, libero eu feugiat iaculis, quam leo vehicula tellus, eu condimentum sapien odio sit amet ligula.", :section_id => 1, :topicOrder => 2)

Topic.create(:name => "Poverty", :description => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rutrum nunc, in tempus arcu commodo id. Aenean a felis lacus, sit amet malesuada nibh. Vestibulum egestas purus nec enim lacinia convallis. Ut at sapien semper eros malesuada molestie sit amet nec nibh. Mauris sagittis, libero eu feugiat iaculis, quam leo vehicula tellus, eu condimentum sapien odio sit amet ligula.", :section_id => 1, :topicOrder => 3)

Topic.create(:name => "Capital Good Fund", :description => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rutrum nunc, in tempus arcu commodo id. Aenean a felis lacus, sit amet malesuada nibh. Vestibulum egestas purus nec enim lacinia convallis. Ut at sapien semper eros malesuada molestie sit amet nec nibh. Mauris sagittis, libero eu feugiat iaculis, quam leo vehicula tellus, eu condimentum sapien odio sit amet ligula.", :section_id => 1, :topicOrder => 4)
