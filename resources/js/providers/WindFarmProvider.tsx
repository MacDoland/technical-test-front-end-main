import { createContext, useMemo } from "react";
import type {
  ComponentType,
  GradeType,
  WindFarmContextType,
} from "../types/types";
import useGetData from "../hooks/useGetData";
import isNotNullOrUndefined from "../helpers/helpers";

interface ProviderProps {
  children: React.ReactNode;
}

const defaultValue: WindFarmContextType = {
  componentTypes: [],
  gradeTypes: [],
};

export const WindFarmContext = createContext(defaultValue);

export const WindFarmProvider: React.FC<ProviderProps> = ({
  children,
}: ProviderProps) => {
  const componentTypes = useGetData<ComponentType[]>(
    "/api/component-types",
    new Array<ComponentType>(),
  );
  const gradeTypes = useGetData<GradeType[]>(
    "/api/grade-types",
    new Array<GradeType>(),
  );

  const value: WindFarmContextType = useMemo((): WindFarmContextType => {
    return {
      componentTypes: isNotNullOrUndefined(componentTypes)
        ? (componentTypes as ComponentType[])
        : new Array<ComponentType>(),
      gradeTypes: isNotNullOrUndefined(gradeTypes)
        ? (gradeTypes as GradeType[])
        : new Array<GradeType>(),
    };
  }, [componentTypes, gradeTypes]);

  return (
    <WindFarmContext.Provider value={value}>
      {children}
    </WindFarmContext.Provider>
  );
};
