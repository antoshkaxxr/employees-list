import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EmployeeTable } from '../../components/EmployeeTable/EmployeeTable';
import { RootState, AppDispatch } from '../../store/store';
import './MainPage.css';
import { PagesPath } from '../../components/PagesPath/PagesPath';
import { fetchEmployees, resetEmployees } from '../../store/employeesSlice';
import { setSearchQuery, setSelectedFilters } from '../../store/filtersSlice';
import { mapFunction } from "../../utils/mapFunction";
import { FilterButtons } from "../../components/UI-kit/FilterButtons/FilterButtons";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import {Helmet} from "react-helmet-async";

export function MainPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { employees, loading, error, hasMore } = useSelector((state: RootState) => state.employees);
    const { searchQuery, selectedFilters } = useSelector((state: RootState) => state.filters);
    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        dispatch(resetEmployees());
        dispatch(
            fetchEmployees({
                page: 1,
                limit: 10,
                name: searchQuery,
                gender: selectedFilters.gender,
                position: selectedFilters.position,
                stack: selectedFilters.stack,
            })
        );
    }, [dispatch]);

    const handleScroll = useCallback(() => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.scrollHeight - 50 &&
            !loading &&
            hasMore
        ) {
            dispatch(
                fetchEmployees({
                    page: Math.ceil(employees.length / 10) + 1,
                    limit: 10,
                    name: searchQuery,
                    gender: selectedFilters.gender,
                    position: selectedFilters.position,
                    stack: selectedFilters.stack,
                })
            );
        }
    }, [dispatch, loading, hasMore, employees.length, searchQuery, selectedFilters]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const handleFilterClick = (type: 'gender' | 'position' | 'stack', values: string[]) => {
        dispatch(setSelectedFilters({ type, values }));
    };

    const handleSearch = () => {
        dispatch(resetEmployees());
        dispatch(
            fetchEmployees({
                page: 1,
                limit: 10,
                name: searchQuery,
                gender: selectedFilters.gender,
                position: selectedFilters.position,
                stack: selectedFilters.stack,
            })
        );
    };

    return (
        <div className="main-page-container">
            <Helmet>
                <title>Список сотрудников - 66 Бит</title>
            </Helmet>
            <PagesPath />
            <div className="header-section">
                <h1>Список сотрудников</h1>
                {windowWidth > 768 && <FilterButtons handleFilterClick={handleFilterClick} />}
            </div>

            <div className="search-section">
                <input
                    type="text"
                    placeholder="Поиск"
                    value={searchQuery}
                    onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                    style={{background: isDarkTheme? '#292929' : undefined}}
                />
            </div>

            <div>
                {windowWidth <= 768 && <FilterButtons handleFilterClick={handleFilterClick} />}
            </div>

            <div
                className="filters-section"
                style={{ background: isDarkTheme ? '#3E3E3E' : undefined }}
            >
                <span
                    style={{ color: isDarkTheme ? '#F5F5F5' : undefined }}
                >
                    Выбранные фильтры:
                </span>
                <div className="selected-filters">
                    {Object.entries(selectedFilters).map(([type, filters]) =>
                        filters.map((filter) => (
                            <span
                                key={`${type}-${filter}`}
                                className="filter-tag"
                                style={{ background: isDarkTheme ? '#292929' : undefined }}
                            >
                                <div
                                    className={'cancel-button'}
                                    onClick={() => handleFilterClick(type as 'gender' | 'position' | 'stack', filters.filter(f => f !== filter))}
                                >
                                    <img
                                        src={`/assets/${isDarkTheme ? 'cancel-button-white.svg' : 'cancel-button-black.svg'}`}
                                        alt={'Cancel'}
                                    />
                                </div>
                                <div style={{ color: isDarkTheme ? '#F5F5F5' : undefined }}>
                                    {mapFunction(filter)}
                                </div>
                            </span>
                        ))
                    )}
                </div>
                <button onClick={handleSearch}>Найти</button>
            </div>

            <EmployeeTable data={employees} />
            <div className={'loading-info'}>
                {loading &&
                    <div>Загрузка...</div>
                }
                {error &&
                    <div>Ошибка: {error}</div>
                }
                {!hasMore && employees.length > 0 &&
                    <div>Все сотрудники загружены!</div>
                }
            </div>
        </div>
    );
}
