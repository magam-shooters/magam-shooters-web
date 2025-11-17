// Image Constants - Central repository for all dummy/placeholder images
// Using picsum.photos for reliable, consistent dummy images

export const IMAGES = {
  // Hero Images (Large backgrounds)
  HERO_GOLF_1: "https://picsum.photos/1200/600?random=1",
  HERO_GOLF_2: "https://picsum.photos/1200/600?random=2", 
  HERO_GOLF_3: "https://picsum.photos/1200/600?random=3",
  
  // Large Hero Images
  HERO_LARGE_1: "https://picsum.photos/1200/800?random=4",
  HERO_LARGE_2: "https://picsum.photos/1200/800?random=5",
  HERO_LARGE_3: "https://picsum.photos/1200/800?random=6",
  
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
export const ALT_TEXT = {
  [IMAGES.HERO_GOLF_1]: "Golf course landscape view 1",
  [IMAGES.HERO_GOLF_2]: "Golf course landscape view 2", 
  [IMAGES.HERO_GOLF_3]: "Golf course landscape view 3",
  [IMAGES.HERO_LARGE_1]: "Professional golf equipment setup",
  [IMAGES.HERO_LARGE_2]: "Golf training facility",
  [IMAGES.HERO_LARGE_3]: "Golf course aerial view",
  [IMAGES.PERSON_MALE_1]: "Male golf instructor",
  [IMAGES.PERSON_MALE_2]: "Male golf coach",
  [IMAGES.PERSON_FEMALE_1]: "Female golf instructor", 
  [IMAGES.PERSON_FEMALE_2]: "Female fitness coach",
  [IMAGES.GOLF_COURSE_1]: "Golf course during training",
  [IMAGES.GOLF_COURSE_2]: "Professional golf facility",
  [IMAGES.GOLF_EQUIPMENT_1]: "Golf clubs and equipment",
  [IMAGES.GOLF_EQUIPMENT_2]: "Professional golf gear",
  [IMAGES.SERVICE_1]: "Golf coaching service",
  [IMAGES.SERVICE_2]: "Golf training program", 
  [IMAGES.SERVICE_3]: "Golf fitness training",
  [IMAGES.SERVICE_4]: "Golf equipment service",
  [IMAGES.SERVICE_5]: "Golf lesson program",
  [IMAGES.SERVICE_6]: "Golf tournament service",
  [IMAGES.SERVICE_7]: "Golf club fitting",
  [IMAGES.SERVICE_8]: "Golf course management",
  [IMAGES.GALLERY_1]: "Golf action shot 1",
  [IMAGES.GALLERY_2]: "Golf action shot 2",
  [IMAGES.GALLERY_3]: "Golf action shot 3", 
  [IMAGES.GALLERY_4]: "Golf action shot 4",
  [IMAGES.FEATURE_LARGE_1]: "Golf facility feature",
  [IMAGES.FEATURE_LARGE_2]: "Golf equipment showcase",
  [IMAGES.VIDEO_LARGE_1]: "Golf video tutorial",
  [IMAGES.TIP_SMALL_1]: "Golf swing technique",
  [IMAGES.TIP_SMALL_2]: "Golf stance tutorial",
  [IMAGES.TIP_SMALL_3]: "Golf course strategy",
  [IMAGES.TIP_SMALL_4]: "Golf mental training",
  [IMAGES.PLAYER_1]: "Golf player portrait 1",
  [IMAGES.PLAYER_2]: "Golf player portrait 2",
} as const;