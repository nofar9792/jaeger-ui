// Copyright (c) 2017 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { trackEvent } from '../../../utils/tracking';

// export for tests
export const CATEGORY_MONITOR = 'jaeger/ux/monitor/service-view';

// export for tests
export const ACTION_SET_SERVICE = 'set-service';
export const ACTION_SET_TIMEFRAME = 'set-timeframe';
export const ACTION_VIEW_ALL_TRACES = 'view-all-traces';
export const ACTION_VIEW_OPERATION_TRACES = 'view-operation-traces';
export const ACTION_SEARCH_OPERATION = 'search-operation';
export const ACTION_RANGE_REFRAME = 'reframe';
export const ACTION_RANGE_SHIFT = 'shift';

export function trackSetService() {
  trackEvent(CATEGORY_MONITOR, ACTION_SET_SERVICE);
}

export function trackSetTimeframe() {
  trackEvent(CATEGORY_MONITOR, ACTION_SET_TIMEFRAME);
}

export function trackViewAllTraces() {
  trackEvent(CATEGORY_MONITOR, ACTION_VIEW_ALL_TRACES);
}

export function trackViewOperationTraces() {
  trackEvent(CATEGORY_MONITOR, ACTION_VIEW_OPERATION_TRACES);
}

export function trackSearchOperation() {
  trackEvent(CATEGORY_MONITOR, ACTION_SEARCH_OPERATION);
}
