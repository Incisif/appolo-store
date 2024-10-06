import {
    MagnifyingGlassIcon,
  } from "@heroicons/react/24/outline";

const SearchIcon
 = () => {
    return (
        <div className="p-1 rounded-sm hover:bg-gray-200 ml-4">
        <MagnifyingGlassIcon
        className="w-4 h-4"
        data-testid="magnifyingGlassIcon"
      />
      </div>
    );
}

export default SearchIcon
;