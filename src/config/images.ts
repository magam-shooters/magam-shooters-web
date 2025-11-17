// Image Constants - Central repository for all dummy/placeholder images
// Using picsum.photos for reliable, consistent dummy images

export const IMAGES = {
  // Hero Images (Large backgrounds)
  HERO_GOLF_1: "/gallery/img-01.jpeg",
  HERO_GOLF_2: "/gallery/img-02.jpeg", 
  HERO_GOLF_3: "/gallery/img-03.jpeg",
  
  // Large Hero Images
  HERO_LARGE_1: "/gallery/img-01.jpeg",
  HERO_LARGE_2: "/gallery/img-02.jpeg",
  HERO_LARGE_3: "/gallery/img-03.jpeg",

  // People/Team Images (Square)
  PERSON_MALE_1: "https://picsum.photos/400/400?random=7",
  PERSON_MALE_2: "https://picsum.photos/400/400?random=8", 
  PERSON_FEMALE_1: "https://picsum.photos/400/400?random=9",
  PERSON_FEMALE_2: "https://picsum.photos/400/400?random=10",
  
  // Sports/Golf Images (Rectangle)
  GOLF_COURSE_1: "https://picsum.photos/600/400?random=11",
  GOLF_COURSE_2: "https://picsum.photos/600/400?random=12",
  GOLF_EQUIPMENT_1: "https://picsum.photos/600/400?random=13",
  GOLF_EQUIPMENT_2: "https://picsum.photos/600/400?random=14",
  
  // Service/Feature Images
  SERVICE_1: "https://picsum.photos/500/350?random=15",
  SERVICE_2: "https://picsum.photos/500/350?random=16",
  SERVICE_3: "https://picsum.photos/500/350?random=17",
  SERVICE_4: "https://picsum.photos/500/350?random=18",
  SERVICE_5: "https://picsum.photos/500/350?random=19",
  SERVICE_6: "https://picsum.photos/500/350?random=20",
  SERVICE_7: "https://picsum.photos/500/350?random=21",
  SERVICE_8: "https://picsum.photos/500/350?random=22",
  
  // Gallery/Photo Grid Images
  GALLERY_1: "/gallery/img-01.jpeg",
  GALLERY_2: "/gallery/img-02.jpeg",
  GALLERY_3: "/gallery/img-03.jpeg",
  GALLERY_4: "/gallery/img-03.jpeg",
  
  // Large Feature Images
  FEATURE_LARGE_1: "https://picsum.photos/600/500?random=27",
  FEATURE_LARGE_2: "https://picsum.photos/600/500?random=28",
  
  // Video/Tips Images 
  VIDEO_LARGE_1: "https://picsum.photos/500/400?random=29",
  
  // Small Tip/Tutorial Images
  TIP_SMALL_1: "https://picsum.photos/300/200?random=30",
  TIP_SMALL_2: "https://picsum.photos/300/200?random=31",
  TIP_SMALL_3: "https://picsum.photos/300/200?random=32",
  TIP_SMALL_4: "https://picsum.photos/300/200?random=33",
  
  // Match/Player Images
  PLAYER_1: "https://picsum.photos/400/300?random=34",
  PLAYER_2: "https://picsum.photos/400/300?random=35",
} as const;

// Image type mapping for easy reference
export const IMAGE_CATEGORIES = {
  HERO: [IMAGES.HERO_GOLF_1, IMAGES.HERO_GOLF_2, IMAGES.HERO_GOLF_3],
  HERO_LARGE: [IMAGES.HERO_LARGE_1, IMAGES.HERO_LARGE_2, IMAGES.HERO_LARGE_3],
  TEAM: [IMAGES.PERSON_MALE_1, IMAGES.PERSON_MALE_2, IMAGES.PERSON_FEMALE_1, IMAGES.PERSON_FEMALE_2],
  GALLERY: [IMAGES.GALLERY_1, IMAGES.GALLERY_2, IMAGES.GALLERY_3, IMAGES.GALLERY_4],
  SERVICES: [
    IMAGES.SERVICE_1, IMAGES.SERVICE_2, IMAGES.SERVICE_3, IMAGES.SERVICE_4,
    IMAGES.SERVICE_5, IMAGES.SERVICE_6, IMAGES.SERVICE_7, IMAGES.SERVICE_8
  ],
} as const;

// Alt text mapping for accessibility
export const ALT_TEXT: Record<string, string> = {};

ALT_TEXT[IMAGES.HERO_GOLF_1] = "Golf course landscape view 1";
ALT_TEXT[IMAGES.HERO_GOLF_2] = "Golf course landscape view 2";
ALT_TEXT[IMAGES.HERO_GOLF_3] = "Golf course landscape view 3";
ALT_TEXT[IMAGES.PERSON_MALE_1] = "Male golf instructor";
ALT_TEXT[IMAGES.PERSON_MALE_2] = "Male golf coach";
ALT_TEXT[IMAGES.PERSON_FEMALE_1] = "Female golf instructor";
ALT_TEXT[IMAGES.PERSON_FEMALE_2] = "Female fitness coach";
ALT_TEXT[IMAGES.GOLF_COURSE_1] = "Golf course during training";
ALT_TEXT[IMAGES.GOLF_COURSE_2] = "Professional golf facility";
ALT_TEXT[IMAGES.GOLF_EQUIPMENT_1] = "Golf clubs and equipment";
ALT_TEXT[IMAGES.GOLF_EQUIPMENT_2] = "Professional golf gear";
ALT_TEXT[IMAGES.SERVICE_1] = "Golf coaching service";
ALT_TEXT[IMAGES.SERVICE_2] = "Golf training program";
ALT_TEXT[IMAGES.SERVICE_3] = "Golf fitness training";
ALT_TEXT[IMAGES.SERVICE_4] = "Golf equipment service";
ALT_TEXT[IMAGES.SERVICE_5] = "Golf lesson program";
ALT_TEXT[IMAGES.SERVICE_6] = "Golf tournament service";
ALT_TEXT[IMAGES.SERVICE_7] = "Golf club fitting";
ALT_TEXT[IMAGES.SERVICE_8] = "Golf course management";
ALT_TEXT[IMAGES.GALLERY_1] = "Golf action shot 1";
ALT_TEXT[IMAGES.GALLERY_2] = "Golf action shot 2";
ALT_TEXT[IMAGES.GALLERY_3] = "Golf action shot 3";
ALT_TEXT[IMAGES.GALLERY_4] = "Golf action shot 4";
ALT_TEXT[IMAGES.FEATURE_LARGE_1] = "Golf facility feature";
ALT_TEXT[IMAGES.FEATURE_LARGE_2] = "Golf equipment showcase";
ALT_TEXT[IMAGES.VIDEO_LARGE_1] = "Golf video tutorial";
ALT_TEXT[IMAGES.TIP_SMALL_1] = "Golf swing technique";
ALT_TEXT[IMAGES.TIP_SMALL_2] = "Golf stance tutorial";
ALT_TEXT[IMAGES.TIP_SMALL_3] = "Golf course strategy";
ALT_TEXT[IMAGES.TIP_SMALL_4] = "Golf mental training";
ALT_TEXT[IMAGES.PLAYER_1] = "Golf player portrait 1";
ALT_TEXT[IMAGES.PLAYER_2] = "Golf player portrait 2";