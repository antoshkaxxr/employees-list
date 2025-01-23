import './Switch.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {toggleTheme} from "../../../store/themeSlice";

export function Switch() {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);

    return (
        <div className="switch" onClick={() => dispatch(toggleTheme())}>
            <img
                src={isDarkTheme ? '/assets/dark-switch.svg' : '/assets/light-switch.svg'}
                alt={isDarkTheme ? 'Dark Mode' : 'Light Mode'}
            />
        </div>
    );
}
