import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import useFetchCategory from "@/utils/Hooks/Tanstack/Dish/useQueryCategory";
import { useNavigate } from "react-router-dom";
  
  interface CategoryDropdownProps {
    setSearchQuery: (query: string) => void; // Accept setSearchQuery as a prop
  }
  
import { ChevronDown, UtensilsCrossed } from "lucide-react";

  const CategoryDropdown = ({ setSearchQuery }: CategoryDropdownProps) => {
    const { data: category, isLoading:loading, error } = useFetchCategory();
    const categories = Array.from(new Set(category?.map((category) => category.name)));
    const navigate = useNavigate();

    if (loading) return <span className="text-gray-400 animate-pulse">Loading...</span>;
    if (error) return <span className="text-red-400">Error</span>;
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#a0c878] transition-colors outline-none focus:outline-none">
          Category <ChevronDown className="w-4 h-4 opacity-70" />
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-56 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-2"
          align="start"
          sideOffset={8}
        >
          <DropdownMenuLabel className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            Select a Category
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-100 my-1" />
          
          <DropdownMenuItem 
            className="px-3 py-2.5 rounded-xl cursor-pointer text-gray-700 font-medium hover:bg-[#a0c878]/10 focus:bg-[#a0c878]/10 hover:text-[#a0c878] focus:text-[#a0c878] transition-colors outline-none"
            onClick={() => {
              setSearchQuery("");
              navigate("/");
            }}
          >
            All Categories
          </DropdownMenuItem>
          
          <div className="max-h-[300px] overflow-y-auto space-y-1 mt-1 pr-1 custom-scrollbar">
            {categories.map((cat) => (
              <DropdownMenuItem
                key={String(cat)}
                className="px-3 py-2.5 rounded-xl cursor-pointer text-gray-600 hover:bg-[#a0c878]/10 focus:bg-[#a0c878]/10 hover:text-[#a0c878] focus:text-[#a0c878] transition-colors outline-none"
                onClick={() => {
                  setSearchQuery(Array.isArray(cat) ? cat[0] : String(cat));
                  navigate("/");
                }}
              >
                {String(cat)}
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  
  export default CategoryDropdown;
  