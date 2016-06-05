class FeedEntry < ActiveRecord::Base
  def self.update__from_feed(feed url)
   feed = Feedjira::Feed.fetch_and_parse(feed_url)
feed.entries.each do |entry|
  unless exists? :guid =>entry.id
    create! (
        :name            => entry.name,
        :summary         => entry.summary,
        :published_at    => entry.published,
        :url             => entry.url,
        :guid            => entry.id
    )
    end
  end
end
end
