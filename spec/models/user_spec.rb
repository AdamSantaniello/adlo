require "rails_helper"

RSpec.describe User, type: :model do
  it "is valid with valid attributes" do
    user = User.new(email: "test@example.com", password: "password")
    expect(user).to be_valid
  end

  it "is invalid without an email" do
    user = User.new(password: "password")
    expect(user).not_to be_valid
  end
end