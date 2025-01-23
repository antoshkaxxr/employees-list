import {CustomSelect} from "../CustomSelect/CustomSelect";
import {genderOptions, positionOptions, stackOptions} from "../../../const";
import './FilterButtons.css';

type FilterButtonsProps = {
    handleFilterClick: (type: 'gender' | 'position' | 'stack', values: string[]) => void;
}

export function FilterButtons({handleFilterClick}: FilterButtonsProps) {
    return (
        <div className="filter-buttons">
            <CustomSelect
                options={positionOptions}
                placeholder="Должность"
                onChange={(values) => handleFilterClick('position', values)}
            />
            <CustomSelect
                options={genderOptions}
                placeholder="Пол"
                onChange={(values) => handleFilterClick('gender', values)}
            />
            <CustomSelect
                options={stackOptions}
                placeholder="Стек технологий"
                onChange={(values) => handleFilterClick('stack', values)}
            />
        </div>
    )
}
