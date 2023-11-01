Feature: Movie sharing

  Scenario: User shares a movie successfully
    Given User visits homepage
    When User logs into the system
    Then User clicks the Share a movie button
    And User is redirected to the movie sharing page
    When User fills a YouTube video URL
    And User clicks the Share button
    Then User sees the video is shared on the homepage
