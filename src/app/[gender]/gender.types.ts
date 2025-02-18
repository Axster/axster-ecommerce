import {
  CategoryKey,
  Categoryroutes,
  GenderRoutes,
} from "@/services/api.model";

export type GenderParams = {
  gender: GenderRoutes;
  category: Categoryroutes;
  subcategory: CategoryKey;
};
