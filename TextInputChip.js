import React, { useState } from "react";
import PropTypes from "prop-types";
import deburr from "lodash/deburr";
import Downshift from "downshift";
import {
  makeStyles,
  TextField,
  Paper,
  MenuItem,
  Chip,
  CircularProgress
} from "@material-ui/core";
import invariant from "invariant";
import { isPlainObject } from "lodash";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 50,
    "& .MuiChip-deleteIcon": {
      color: props => props.colorDelete
    },
    "& .MuiPaper-root": {
      backgroundColor: props => props.backgroundMenuItem
    },
    "& .MuiMenuItem-root": {
      color: props => props.colorMenuItem
    },
    "& .MuiMenuItem-root:hover": {
      color: props => props.colorMenuItemSelect
    },
    "& .MuiListItem-button:hover": {
      backgroundColor: props => props.backgroundItemSelect
    },
    "& label.Mui-focused": {
      color: "#007bff"
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#cacccf"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#007bff"
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "#ffb41b"
    }
  },
  container: {
    flexGrow: 1,
    position: "relative"
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  chip: {
    margin: theme.spacing(0.5, 0.25)
  },
  inputRoot: {
    flexWrap: "wrap"
  },
  inputInput: {
    width: "auto",
    flexGrow: 1
  },
  divider: {
    height: theme.spacing(2)
  },
  noDisplay: {
    "& .MuiInputBase-inputAdornedStart": {
      display: "none !important"
    },
    "& .MuiChip-root": {
      justifyContent: "flex-start !important"
    },
    "& .MuiChip-deleteIcon": {
      position: "absolute",
      right: "5px"
    }
  }
}));

function getStringLabelKey(labelKey) {
  return typeof labelKey === "string" ? labelKey : "label";
}

function getOptionLabel(option, labelKey) {
  if (option.paginationOption || option.customOption)
    return option[getStringLabelKey(labelKey)];

  let optionLabel;
  if (typeof option === "string") optionLabel = option;
  // This overwrites string options, but we assume the consumer wants to do something custom if `labelKey` is a function.
  if (typeof labelKey === "function") optionLabel = labelKey(option);
  else if (typeof labelKey === "string" && isPlainObject(option))
    optionLabel = option[labelKey];
  invariant(
    typeof optionLabel === "string",
    "One or more options does not have a valid label string. Check the " +
      "`labelKey` prop to ensure that it matches the correct option key and " +
      "provides a string for filtering and display."
  );
  return optionLabel;
}

function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;
  return (
    <span className={classes.noDisplay}>
      <TextField
        InputProps={{
          inputRef: ref,
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput
          },
          ...InputProps
        }}
        {...other}
      />
    </span>
  );
}

renderInput.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  InputProps: PropTypes.object
};

function renderSuggestion(suggestionProps) {
  const {
    itemProps,
    renderMenuItemChildren,
    suggestion,
    index
  } = suggestionProps;

  return (
    <MenuItem
      {...itemProps}
      key={index}
      component="div"
      style={{
        fontWeight: 400
      }}
    >
      {renderMenuItemChildren(suggestion, suggestionProps, index)}
    </MenuItem>
  );
}

TextInputChip.defaultProps = {
  labelKey: "label",
  renderMenuItemChildren: (option, props, index) => option.label,
  placeholder: "Search...",
  label: "Search",
  noFound: "No matches found.",
  fullWidth: false
};

renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.number
  ]).isRequired,
  index: PropTypes.number.isRequired,
  itemProps: PropTypes.object.isRequired,
  selectedItem: PropTypes.string.isRequired,
  suggestion: PropTypes.shape({
    label: PropTypes.string.isRequired
  }).isRequired,
  fullWidth: PropTypes.bool
};

function getSuggestions(value, { options = [], showEmpty = false } = {}) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let el = inputLength === 0 && !showEmpty ? [] : options;
  return el;
}

export default function TextInputChip({
  options,
  onSearch,
  onChange,
  selectedItem,
  labelKey,
  renderMenuItemChildren,
  placeholder,
  label,
  noResult,
  noFound,
  fullWidth,
  backgroundColorChip,
  colorTextChip,
  colorDelete,
  deleteIcon,
  avatar,
  backgroundMenuItem,
  backgroundItemSelect,
  colorMenuItem,
  colorMenuItemSelect,
  backgroundColorLoading,
  loading
}) {
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(0);
    function tick() {
      setProgress(oldProgress => oldProgress + 1);
    }

    const timer = setInterval(tick, 10);
    return () => {
      clearInterval(timer);
    };
  }, [search]);

  const classes = useStyles({
    colorDelete,
    backgroundMenuItem,
    backgroundItemSelect,
    colorMenuItem,
    colorMenuItemSelect
  });

  function handleInputChange({ target: { value } }) {
    if (onSearch) onSearch(value);
  }

  function handleChange(event) {
    if (onChange) onChange(event);
  }

  return (
    <div className={classes.root}>
      <Downshift
        id="downshift-options"
        onChange={handleChange}
        selectedItem={selectedItem}
        itemToString={() => search}
        inputValue={search}
      >
        {({
          clearSelection,
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          openMenu,
          selectedItem
        }) => {
          const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
            onChange: ({ target: { value } }) => {
              setSearch(value);
              if (value === "") clearSelection();
            },
            onFocus: () => {
              setFocus(true);
              return openMenu;
            },
            onBlur: () => {
              setFocus(false);
              return openMenu;
            },
            placeholder
          });
          return (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                label,
                search,
                InputLabelProps: getLabelProps({
                  shrink:
                    focus || inputValue.length > 0 || selectedItem !== null
                }),
                InputProps: {
                  startAdornment: selectedItem !== null && (
                    <Chip
                      avatar={avatar && avatar(selectedItem)}
                      key={1}
                      tabIndex={-1}
                      label={getOptionLabel(selectedItem, labelKey)}
                      className={classes.chip}
                      onDelete={() => clearSelection()}
                      deleteIcon={deleteIcon && deleteIcon(selectedItem)}
                      style={{
                        width: fullWidth && "100%",
                        backgroundColor: backgroundColorChip,
                        color: colorTextChip
                      }}
                    />
                  ),
                  endAdornment: loading &&
                    progress < 100 &&
                    focus &&
                    inputValue.length > 0 &&
                    selectedItem === null && (
                      <CircularProgress
                        size={24}
                        style={{ color: backgroundColorLoading }}
                        variant="determinate"
                        value={progress}
                      />
                    ),
                  onBlur,
                  onChange: event => {
                    handleInputChange(event);
                    onChange(event);
                  },
                  onFocus
                },
                inputProps
              })}

              <div {...getMenuProps()}>
                {focus || isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue, {
                      options,
                      showEmpty: false
                    }).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        renderMenuItemChildren,
                        itemProps: getItemProps({
                          item: suggestion
                        }),
                        highlightedIndex,
                        selectedItem
                      })
                    )}
                    {inputValue.length > 0 &&
                      getSuggestions(inputValue, { options, showEmpty: true })
                        .length === 0 && (
                        <MenuItem
                          key={"noFound"}
                          component="div"
                          style={{
                            fontWeight: 400
                          }}
                          onClick={() => {
                            if (noResult !== undefined) noResult(true);
                          }}
                        >
                          {noFound}
                        </MenuItem>
                      )}
                  </Paper>
                ) : null}
              </div>
            </div>
          );
        }}
      </Downshift>
    </div>
  );
}
