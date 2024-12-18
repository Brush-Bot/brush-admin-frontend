import { getPromotionList } from '@/services/promotion.ts';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { useEffect } from 'react';

const usePromotion = () => {
  const {
    mutate: fetchPromotionList,
    data: promotionList,
    isPending: getPromotionListLoading,
  } = useMutation({
    mutationFn: getPromotionList,
    onError: () => {
      message.error('发生错误，请稍后再试。');
    },
  });

  useEffect(() => {
    fetchPromotionList();
  }, []);

  return {
    promotionList,
    getPromotionListLoading,
  };
};

export default usePromotion;
