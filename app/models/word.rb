class Word < ActiveRecord::Base
  validates :text, presence: true
  
  def self.randomWord min, max
    words = self.find_by_sql([<<-SQL, min, max])
      SELECT
        text
      FROM
        words
      WHERE
        char_length(text) BETWEEN ? AND ?
      ORDER BY
        RANDOM()
      LIMIT
        1
    SQL
    
    words.first
  end
end