import { reactive } from 'vue';
const useMetaInfo = function () {
  const metaInfo = reactive({
    fullName: '喵立翰 Miao Li-Han',
    number: '3',
    slogan: ['台灣的明天', '喵先鋪路'],
  });

  return {
    metaInfo,
  };
};

export default useMetaInfo;
