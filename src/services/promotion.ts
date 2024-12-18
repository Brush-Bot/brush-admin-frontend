import { request } from '@/services/request.ts';
import { ApiResponse } from '@/types';

export interface PromotionItem {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  amount: number;
  price: number;
  remark: string;
  type: string;
}

export const getPromotionList = async (): Promise<
  ApiResponse<PromotionItem[]>
> => {
  return request
    .get<ApiResponse<PromotionItem[]>>('/v1/promotion/list')
    .then((res) => res.data);
};
