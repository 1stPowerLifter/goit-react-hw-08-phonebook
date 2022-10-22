import { Box } from "components/Box"
import { useDispatch } from "react-redux";
import { setFilter } from "redux/filter/filterSlice"

export const Filter = () => {
    const dispatch = useDispatch();

    return (
        <Box display="inline-flex"
            flexDirection="column"
            gridGap={3} p={3} mt={3}
            border="1px solid black">
            <label htmlFor='filter'>Find contacts by name</label>
            <input type="text" name="filter" onChange={(e) => dispatch(setFilter(e.target.value))}></input>
        </Box>
    )
}