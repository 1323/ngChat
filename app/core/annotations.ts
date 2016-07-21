export const Component = function(options?: ng.IComponentOptions): Function {
    return (controller: Function) => {
        return options ? angular.extend(options, {controller}) : controller;
    };
};
