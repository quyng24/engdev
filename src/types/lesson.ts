export interface Vocabulary {
  word: string;
  meaning: string;
}

export interface Lesson {
  id: string;
  title: string;
  contentEn: string;
  contentVi: string;
  vocabularies: Vocabulary[];
}
