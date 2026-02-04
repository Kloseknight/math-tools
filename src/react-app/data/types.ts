export interface SubTopic {
  name: string;
  keywords: string[];
}

export interface VideoCategory {
  id: string;
  name: string;
  subTopics: SubTopic[];
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  category: string;
}