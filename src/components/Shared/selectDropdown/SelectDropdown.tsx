import React, { useState, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectDropdownProps {
  options: SelectOption[];
  onSelect: (value: string) => void;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    onSelect(value);
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="selected-option cursor-pointer border border-gray-300 rounded px-4 py-3 flex items-center justify-between"
        onClick={handleToggleDropdown}
      >
        <span>{selectedOption ? selectedOption : "Select an option"}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </div>
      {isOpen && (
        <div
          className="absolute z-10 top-full left-0 w-full bg-white border border-gray-300 rounded-b shadow-md mt-1"
          ref={dropdownRef}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="option cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
