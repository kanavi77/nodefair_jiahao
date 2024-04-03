import create from 'zustand';

export const useStore = create((set) => ({
    selectedCompanies: [],
    setSelectedCompanies: (companies) => set({ selectedCompanies: companies }),
}));