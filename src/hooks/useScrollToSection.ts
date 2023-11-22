const useScrollToSection = function () {
  const scrollToSection = (sectionId: string) => {
    const theSection = document.getElementById(`${sectionId}`);
    if (!theSection) return;

    theSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  return {
    scrollToSection,
  };
};

export default useScrollToSection;
