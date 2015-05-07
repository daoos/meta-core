function cellInfo = busobjectspec() 
% BUSOBJECTSPEC returns a cell array containing bus object information 
% 
% The order of bus element attributes is as follows:
%   ElementName, Dimensions, DataType, SampleTime, Complexity, SamplingMode 

cellInfo = { ... 
  { ... 
    'boprimary', ... 
    '', ... 
    '', { ... 
      {'environment', 1, 'bosecondary', -1, 'real', 'Sample'}; ...
      {'amatrix', [2 2], 'double', -1, 'real', 'Sample'}; ...
    } ...
  } ...
  { ... 
    'bosecondary', ... 
    '', ... 
    '', { ... 
      {'Pressure', 1, 'double', -1, 'real', 'Sample'}; ...
      {'Temperature', 1, 'single', -1, 'real', 'Sample'}; ...
      {'Volume', [3 3], 'uint32', -1, 'real', 'Sample'}; ...
    } ...
  } ...
}'; 
% Create bus objects in the MATLAB base workspace 
Simulink.Bus.cellToObject(cellInfo) 
