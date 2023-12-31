use bevy::{
    prelude::{Commands, DespawnRecursiveExt, Entity, Query, Res},
    time::Time,
};

use super::component::SelfDestruct;

pub fn self_destruct_system(
    time: Res<Time>,
    mut commands: Commands,
    mut query_self_destructs: Query<(Entity, &mut SelfDestruct)>,
) {
    let delta_time = time.delta();
    for (entity, mut self_destruct) in query_self_destructs.iter_mut() {
        self_destruct.tick(delta_time);

        if self_destruct.finished() {
            commands.entity(entity).despawn_recursive();
        }
    }
}
