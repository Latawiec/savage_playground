use crate::{
    debug::{local_input::LocalInputPlugin, rapier_debug::RapierDebugViewPlugin},
    *,
};
use bevy::prelude::IntoSystemConfigs;
use bevy::{
    diagnostic::{FrameTimeDiagnosticsPlugin, LogDiagnosticsPlugin},
    prelude::{Plugin, PostUpdate, Update, Vec2},
};
use bevy_rapier2d::prelude::{NoUserData, PhysicsSet, RapierConfiguration, RapierPhysicsPlugin};

#[derive(Default)]
pub struct FrameworkPlugin;
impl Plugin for FrameworkPlugin {
    fn build(&self, app: &mut bevy::prelude::App) {
        app.add_plugins(RapierPhysicsPlugin::<NoUserData>::pixels_per_meter(0.01))
            .insert_resource(RapierConfiguration {
                gravity: Vec2::ZERO,
                ..Default::default()
            })
            .add_systems(
                PostUpdate,
                systems::player::probed_rigid_body_system::pre_physics_update
                    .before(PhysicsSet::SyncBackend),
            )
            .add_systems(
                PostUpdate,
                systems::player::probed_rigid_body_system::post_physics_update
                    .after(PhysicsSet::Writeback),
            )
            .add_systems(
                Update,
                systems::player::player_input_system::player_input_system,
            )
            .add_systems(Update, systems::player::rendering::player_sprite_update);

        #[cfg(debug_assertions)]
        {
            app.add_plugins(RapierDebugViewPlugin)
                .add_plugins(LocalInputPlugin)
                // Diagnostics
                .add_plugins(LogDiagnosticsPlugin::default())
                .add_plugins(FrameTimeDiagnosticsPlugin::default());
        }
    }
}
