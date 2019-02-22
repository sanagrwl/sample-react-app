export const OPEN_DRAWER = 'OPEN_SIDE_PANEL';
export const CLOSE_DRAWER = 'CLOSE_SIDE_PANEL';

export function openDrawerAction() {
    return {
        type: OPEN_DRAWER
    }
}

export function closeDrawerAction() {
    return {
        type: CLOSE_DRAWER
    }
}